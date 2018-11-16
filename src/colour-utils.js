const hex2RgbArray = hexCode => {
    const hex = hexCode.replace(/[^0-9A-F]/gi, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
};

const isLight = hexCode => {
    const { r, g, b } = hex2RgbArray(hexCode);
    const l = 0.299 * r + 0.587 * g + 0.114 * b;

    return (l / 255) > 0.5 ? true : false;
};

export { isLight }