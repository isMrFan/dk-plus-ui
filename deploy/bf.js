class BuryingPoint {
  constructor(options) {
    this.options = options
    window.requestIdleCallback =
      window.requestIdleCallback ||
      function(cb) {
        var start = Date.now()
        return window.requestAnimationFrame(function() {
          var end = Date.now()
          var timeRemaining = Math.max(0, 50 - (end - start))
          var handle = {
            timeRemaining: function() {
              return Math.max(0, 50 - (Date.now() - end))
            }
          }
          cb(handle, { timeRemaining: timeRemaining })
        })
      }

    window.cancelIdleCallback =
      window.cancelIdleCallback ||
      function(id) {
        window.cancelAnimationFrame(id)
      }
  }
  /**
   * @fuction 浏览器空闲函数封装
   * @param {*} timeout -回调在 timeout 毫秒过后还没有被调用，那么回调任务将放入事件循环中排队
   * @param {*} doing - retrun {isMask}  isMask为true则不再进行空闲时间处理回调
   * @param {*} unload
   */
  idleCallback({ timeout, doing, unload }) {
    let idleCallbackId
    let state = {}
    const handleIdleCallback = (deadline) => {
      // 如果还有剩余时间，就继续执行任务
      while (deadline.timeRemaining() > 0) {
        // 如果任务已经完成，则退出循环
        state = doing(startIdleCallback, () => {
          cancelIdleCallback(idleCallbackId)
        })

        if (state.isMask) {
          break
        }
      }
      // 如果任务还没有完成，就继续启动requestIdleCallback
      if (!state.isMask) {
        startIdleCallback()
      } else {
        cancelIdleCallback(idleCallbackId)
      }
    }
    const startIdleCallback = () => {
      cancelIdleCallback(idleCallbackId)

      idleCallbackId = requestIdleCallback(handleIdleCallback, { timeout })
    }

    window.addEventListener('load', () => {
      startIdleCallback()
    })
    window.addEventListener('unload', () => {
      cancelIdleCallback(idleCallbackId)
      unload && unload()
    })
  }
  /**
   * @function 监听长时间未响应
   * @param {*} endcallBack 未响应回调
   * @param {*} startCallBack 继续响应回调
   * @param {*} timeout 超时时间
   */
  responding(endCallBack, startCallBack, timeout = 5000) {
    let isMask = false
    let lastInteractionTime = Date.now()
    let startDoing = null
    // 监听事件
    const allEvent = () => {
      lastInteractionTime = Date.now()
      if (isMask) {
        if (startCallBack) {
          startCallBack && startCallBack()
          startDoing()
        }
        isMask = false
      }
    }
    this.idleCallback({
      timeout,
      doing(startIdleCallback, cancelIdleCallback) {
        //  长时间未响应
        startDoing = startIdleCallback
        const handleUserInactive = () => {
          cancelIdleCallback()
          isMask = true
          endCallBack && endCallBack()
        }
        window.addEventListener('mousemove', allEvent)

        // 监听键盘输入事件
        window.addEventListener('keydown', allEvent)

        // 监听触摸屏幕事件
        window.addEventListener('touchstart', allEvent)

        // 监听滚动事件
        window.addEventListener('scroll', allEvent)

        const currentTime = Date.now()
        if (currentTime - lastInteractionTime > timeout) {
          handleUserInactive()
          isMask = true
        }
        return {
          isMask
        }
      },
      unload() {
        window.removeEventListener('mousemove', allEvent)

        // 监听键盘输入事件
        window.removeEventListener('keydown', allEvent)

        // 监听触摸屏幕事件
        window.removeEventListener('touchstart', allEvent)

        // 监听滚动事件
        window.removeEventListener('scroll', allEvent)
      }
    })
  }
  /**
   * @function 页面隐藏与显示
   * @param {*} endcallBack 离开
   * @param {*} startCallBack 进入
   */
  browserBackground(endCallBack, startCallBack) {
    const event = () => {
      if (document.hidden) {
        endCallBack && endCallBack()
      } else {
        startCallBack && startCallBack()
      }
    }
    window.addEventListener('load', () => {
      document.addEventListener('visibilitychange', event)
    })
    window.addEventListener('unload', () => {
      document.removeEventListener('visibilitychange', event)
    })
  }
  /**
   *
   * @param {*} target -  监听目标元素
   * @param {*} attrIdName -  绑定元素id的名称，不传为：data-intern-id
   */
  interObserver({ target, attrIdName = 'data-intern-id' }) {
    const observeMap = new Map() // 待处理对象
    let isMask = true
    let startDoing = null
    let cancelDoing = null
    let requestPromise = []
    this.idleCallback({
      timeout: 5000,
      doing(startIdleCallback, cancelIdleCallback) {
        startDoing = startIdleCallback
        cancelDoing = cancelIdleCallback
        console.log(requestPromise, 'requestPromise')
        observeMap.forEach((value, key) => {
          const promise = new Promise((resolve) => {
            resolve(key)
          })
          if (!value.isRequst) {
            requestPromise.push(promise)
            observeMap.set(key, {
              isRequst: true
            })
          }
        })
        if (requestPromise.length > 0) {
          Promise.all(requestPromise).then((res) => {
            console.log(res, '请求')
            requestPromise = []
          })
          isMask = true
          cancelDoing()
        }

        return {
          isMask
        }
      },
      unload() {
        intersectionObserver.disconnect()
      }
    })
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const attr = entry.target.getAttribute(attrIdName)
          if (entry.intersectionRatio <= 0) {
            return
          }
          if (observeMap.get(attr)) {
            intersectionObserver.unobserve(entry.target)
            console.log(`结束监听：${attr}`)
            cancelDoing && cancelDoing()
            isMask = true
            return
          }

          observeMap.set(attr, {
            isRequst: false
          })
          startDoing && startDoing()
          isMask = false
        })
      },
      {
        root: null,
        rootMargin: '20px 0px 0px 0px',
        threshold: 1.0
      }
    )
    const elements = document.querySelectorAll(target)
    elements.forEach((elemnt) => {
      intersectionObserver.observe(elemnt)
    })
  }
}

export default BuryingPoint
