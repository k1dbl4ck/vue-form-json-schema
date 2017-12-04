import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_MODEL_VALIDATE,
  VFS_EVENT_MODEL_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_MODEL_VALIDATE,
} from '../../constants';

const vfsDataMixin = {
  data() {
    return {
      vfsBus: {},
      vfsComponents: {},
      vfsEvents: [
        VFS_EVENT_FIELD_MODEL_UPDATE,
        VFS_EVENT_FIELD_MODEL_VALIDATE,
        VFS_EVENT_MODEL_UPDATE,
        VFS_EVENT_MODEL_UPDATED,
        VFS_EVENT_MODEL_VALIDATE,
      ],
      vfsFieldsActive: [],
      vfsModel: {},
      vfsSchema: {},
      vfsUiSchema: [],
      vfsState: {},
      vfsValidator: null,
    };
  },
};

export default vfsDataMixin;