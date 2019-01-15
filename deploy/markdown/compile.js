#!/usr/bin/env node

const fs = require('fs');

const SOURCE_DIR = __dirname + '/src';
const TARGET_DIR = __dirname + '/../../src/markdown';

const PRIVACY_TOP_BLOCK_PATH = '/blocks/privacy-top-block.md';
const TERMS_TOP_BLOCK_PATH = '/blocks/terms-top-block.md';

fs.readdirSync(SOURCE_DIR).forEach(file => {
    const fileName = file.replace('.md', '');
    let contents = fs.readFileSync(`${SOURCE_DIR}/${file}`, 'utf8');
    let topBlockPath;

    switch (fileName) {
        case 'beautystack-privacy-policy':
            topBlockPath = PRIVACY_TOP_BLOCK_PATH;
            break;
        case 'beautystack-terms-of-service':
            topBlockPath = TERMS_TOP_BLOCK_PATH;
            break;
        default:
            return;
    }

    if (topBlockPath) {
        const blockContent = fs.readFileSync(`${__dirname}${topBlockPath}`, 'utf8');
        fs.writeFileSync(`${TARGET_DIR}/${file}`, `${blockContent}${contents}`);
    }
})
