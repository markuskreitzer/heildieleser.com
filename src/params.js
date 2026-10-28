import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
  lang(param) {
    return param === 'en' ? param : undefined;
  }
});
