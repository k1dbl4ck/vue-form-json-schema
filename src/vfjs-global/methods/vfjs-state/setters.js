import {
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
} from '../../../constants';

const vfjsStateSetters = {
  setVfjsFieldState(value, key) {
    this.vfjsBus.emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
  setVfjsState(state) {
    this.vfjsState = Object.assign({}, this.getVfjsState(), state);
    this.vfjsBus.emit(VFJS_EVENT_STATE_UPDATED);
  },
};

export default vfjsStateSetters;
