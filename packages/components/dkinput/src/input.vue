<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @property {string} type  输入框类型
   * @property {string} placeholder  输入框占位符
   * @property {boolean} disabled  是否禁用
   * @property {boolean} clearable  是否可清空
   * @property {string} prefixIcon  前缀图标
   * @property {string} suffixIcon  后缀图标
   * @property {function} prefixClick  前缀图标点击事件
   * @property {function} suffixClick  后缀图标点击事件
   * @property {string} modelValue  输入框值
   * @property {boolean} autosize  是否自适应高度
   * @property {string} prepend  前置内容
   * @property {string} append  后置内容
   * @property {function} update:modelValue  输入框值改变事件
   * @property {boolean} showPassword  是否显示密码
   * @property {string} size  输入框尺寸
   * @property {string} maxlength  输入框最大长度
   * @property {string} minlength  输入框最小长度
   * @property {string|number} maxlengthType  输入框行数
   * @property {func} showPasswordClick 显示密码点击事件
   * @property {function} onChange  输入框值改变事件
   * @property {boolean} isOnChange  是否触发onChange事件
   * @description 输入框组件
   * @example
   */
  import { defineComponent, computed, ref, nextTick, Ref, ComputedRef, watch } from 'vue'
  import { DKinput, haInputClass } from './input'

  export default defineComponent({
    name: 'DkInput',
    props: DKinput,
    emits: ['update:modelValue', 'change', 'prefix-click', 'suffix-click'],
    setup(props, { emit, slots }) {
      const {
        type,
        disabled,
        placeholder,
        clearable,
        prefixIcon,
        prepend,
        autosize,
        append,
        showPassword,
        size,
        maxlength,
        minlength
      } = props
      const input = ref<HTMLInputElement>() // input
      const textarea = ref<HTMLTextAreaElement>() // textarea
      const __ref = computed(() => input.value || textarea.value) // input || textarea
      const modelValue = ref<string | number | undefined>(props.modelValue) // 输入框值

      const inpClass = new haInputClass()
      const showPasswordIcon = ref<boolean>(false) // 是否显示密码

      const inputType = computed((): string => {
        type InputType = Record<string, string>
        const inpType =
          type === 'password'
            ? isShowPassword.value
              ? showPasswordIcon.value
                ? 'text'
                : 'password'
              : type
            : type
        const typeList: InputType = {
          text: 'text',
          password: 'password',
          textarea: 'textarea'
        }
        return typeList[inpType]
      })

      const isShowPassword = computed((): boolean => {
        return showPassword && type === 'password' && !disabled && !!modelValue.value
      })
      /**
       * @description 显示密码点击事件
       */
      const showPasswordClick = () => {
        showPasswordIcon.value = !showPasswordIcon.value
        focus()
      }
      const inputModeType = computed((): 'text' | 'numeric' =>
        type === 'number' ? 'numeric' : 'text'
      )

      const inputClassList = computed<Array<string>>((): string[] => {
        const list: string[] = ['dk-input', inpClass.n(type)]
        type InputClass = Record<string, boolean>
        const isClass: InputClass = {
          'is-disabled': disabled,
          'is-medium': size === 'medium',
          'is-small': size === 'small',
          'is-mini': size === 'mini'
        }
        let classList: string[] = []
        classList = inpClass.cLTS(isClass, classList)
        return list.concat(classList)
      })

      const inputFocus = ref<Boolean>(false)
      /**
       * @description 获取焦点
       */
      const handleFocus = () => {
        inputFocus.value = true
      }

      /**
       * @description 失去焦点
       */
      const handleBlur = () => {
        inputFocus.value = false
        if (isOnChange.value) {
          emit('change', modelValue.value)
          isOnChange.value = false
        }
      }

      const wrapperClassList = computed((): string[] => {
        const wrapperClass: string[] = [
          type !== 'textarea' ? 'dk-input__wrapper' : 'dk-textarea__inner'
        ]
        type WrapperType = Record<string, boolean>
        const isClass: WrapperType = {
          'is-focus': !!inputFocus.value,
          'is-prepend': !!prepend || !!slots.prepend,
          'is-append': !!append || !!slots.append
        }
        let list: string[] = []
        list = inpClass.cLTS(isClass, list)
        return wrapperClass.concat(list)
      })

      const showClear = computed(
        (): boolean =>
          !!clearable && !!modelValue.value && inputMouseenter.value && !disabled
      )

      /**
       * @description 清空输入框
       */
      const clear = () => {
        modelValue.value = ''
        emit('update:modelValue', '')
      }

      const isOnChange = ref<boolean>(false)
      /**
       * @description input输入事件
       */
      const handleInput = (e: Event) => {
        emit('update:modelValue', modelValue.value)
        isOnChange.value = true
        if (autosize) {
          const target = e.target as HTMLInputElement
          target.style.height = 'auto'
          target.style.height = target.scrollHeight + 'px'
        }
      }

      const innerClassList = computed((): string[] => {
        const list = [inpClass.n('inner')]
        type objType = Record<string, boolean>
        const isObj: objType = {
          'is-disabled': disabled
        }
        let innerClass: string[] = []
        innerClass = inpClass.cLTS(isObj, innerClass)
        return list.concat(innerClass)
      })

      const inputMouseenter = ref<boolean>(false)

      /**
       * @description 鼠标移入
       */
      const handleMouseenter = () => {
        inputMouseenter.value = true
      }
      /**
       * @description 鼠标移出
       */
      const handleMouseleave = () => {
        inputMouseenter.value = false
      }

      const showPasswordClassList = computed((): string[] => {
        const list: string[] = [inpClass.n('show-password')]
        type objType = Record<string, boolean>
        const isObj: objType = {
          'dk-icon-show': showPasswordIcon.value,
          'dk-icon-hide': !showPasswordIcon.value
        }
        let classList: string[] = []
        classList = inpClass.cLTS(isObj, classList)
        return list.concat(classList)
      })

      /**
       * @description 聚焦
       */
      const focus = async () => {
        await nextTick()
        __ref.value?.focus()
      }
      /**
       * @description 失去
       */
      const blur = async () => {
        await nextTick()
        __ref.value?.blur()
      }

      const maxlengthType = computed((): string | number => {
        return maxlength ? maxlength : ''
      })

      const minlengthType = computed((): string | number => {
        return minlength ? minlength : ''
      })

      const isDisabled = computed((): boolean => {
        return disabled
      })

      const prefixIconClass = computed((): string => {
        return prefixIcon ? prefixIcon : ''
      })
      const prependValue = computed((): string => {
        return prepend ? prepend : ''
      })
      const appendValue = computed((): string => {
        return append ? append : ''
      })

      watch(
        () => props.modelValue,
        (n, o) => {
          if (n !== o && !inputFocus.value) {
            console.log(n, o, 'n,o')
            emit('change', n)
          }
        }
      )

      const prefixClick = () => {
        emit('prefix-click')
      }
      const suffixClick = () => {
        emit('suffix-click')
      }

      return {
        isDisabled,
        inputClassList,
        inputModeType,
        placeholder,
        wrapperClassList,
        handleFocus,
        handleBlur,
        clear,
        showClear,
        modelValue,
        handleInput,
        innerClassList,
        handleMouseenter,
        handleMouseleave,
        inputType,
        prefixIconClass,
        inpClass,
        prefixClick,
        suffixClick,
        prependValue,
        appendValue,
        isShowPassword,
        showPasswordClick,
        showPasswordClassList,
        showPasswordIcon,
        maxlengthType,
        minlengthType,
        input,
        textarea
      }
    }
  })
</script>

<template>
  <div
    :class="[inputClassList]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <div v-if="$slots.prepend || prependValue" :class="[inpClass.n('prepend')]">
        {{ prependValue }}
        <slot name="prepend"></slot>
      </div>
      <!-- input -->
      <div :class="wrapperClassList">
        <!-- prefix slot -->
        <span v-if="$slots.prefix || prefixIconClass" :class="[inpClass.n('prefix')]">
          <span @click="prefixClick" :class="inpClass.n('prefix--inner')">
            <slot name="prefix"></slot>
            <dk-icon
              v-if="prefixIconClass"
              :class="[inpClass.i('icon', prefixIconClass)]"
            ></dk-icon>
          </span>
        </span>

        <input
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          v-model="modelValue"
          :disabled="isDisabled"
          :placeholder="placeholder"
          :type="inputType"
          :class="innerClassList"
          :inputmode="inputModeType"
          ref="input"
          :maxlength="maxlengthType"
          :minlength="minlengthType"
        />
        <!-- clearable -->
        <template v-if="clearable && showClear">
          <dk-icon
            class="dk-icon-del1 dk-input__clear"
            :size="13"
            @click="clear"
          ></dk-icon>
        </template>
        <!-- suffix slot -->
        <span v-if="$slots.suffix || suffixIcon" :class="inpClass.n('suffix')">
          <span @click="suffixClick" :class="inpClass.n('suffix--inner')">
            <slot name="suffix"></slot>
            <dk-icon
              v-if="suffixIcon"
              :class="[inpClass.i('icon', suffixIcon)]"
            ></dk-icon>
          </span>
        </span>
        <!-- showPassword -->
        <template v-if="isShowPassword">
          <dk-icon
            :class="showPasswordClassList"
            :size="13"
            @click.stop="showPasswordClick"
          ></dk-icon>
        </template>
      </div>

      <!-- append -->
      <div v-if="$slots.append || appendValue" :class="[inpClass.n('append')]">
        {{ appendValue }}
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        :class="wrapperClassList"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
        :placeholder="placeholder"
        ref="textarea"
        :maxlength="maxlengthType"
        :minlength="minlengthType"
      ></textarea>
    </template>
  </div>
</template>
