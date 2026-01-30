import { defineConfig } from 'eslint/config';
import { configs } from '@croct/eslint-plugin';

export default defineConfig(
    configs.typescript,
    {
        files: ['bin/*.ts'],
        rules: {
            'no-console': 'off',
        },
    }
);