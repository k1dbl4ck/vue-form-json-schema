// Elements which supports the 'value' attribute
const valueElements = ['input', 'option', 'textarea'];

// Elements which has their value within the tags
const innerHTMLElements = ['textarea'];

// Elements which supports the 'required' attribute
const requiredElements = ['input', 'select', 'textarea'];

const computed = {
  vfjsComputedFieldHasErrors() {
    return this.vfjsFieldState.vfjsFieldErrors && this.vfjsFieldState.vfjsFieldErrors.length > 0;
  },
  vfjsComputedShowFieldErrors() {
    return this.vfjsFieldState.vfjsFieldDirty || this.vfjsOptions.showValidationErrors;
  },
  vfjsComputedFieldErrorOptions() {
    return this.vfjsComputedShowFieldErrors && this.vfjsComputedFieldHasErrors
      ? this.vfjsFieldErrorOptions
      : {};
  },
  vfjsComputedFieldAttrs() {
    const attrs = {
      // id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
    };

    if (requiredElements.indexOf(this.component) !== -1) {
      attrs.required = this.vfjsFieldRequired;
    }

    if (valueElements.indexOf(this.component) !== -1) {
      attrs.value =
        this.vfjsFieldModel || (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value);
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const domProps = {};

    if (innerHTMLElements.indexOf(this.component) !== -1) {
      domProps.innerHTML =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML);
    }

    return domProps;
  },
  vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      domProps: this.vfjsComputedFieldDomProps,
      key: this.vfjsFieldOptions.key || this.vfjsFieldId,
    };
  },
  vfjsComputedMergedFieldOptions() {
    return Object.assign(
      {},
      this.vfjsDefaultOptions,
      this.vfjsComputedFieldErrorOptions,
      this.vfjsComputedFieldOptions,
    );
  },
  vfjsComputedFieldChildren() {
    if (this.vfjsFieldErrorHandler && !this.vfjsComputedShowFieldErrors) {
      return [];
    }

    return this.$slots.default;
  },
};

export default computed;
