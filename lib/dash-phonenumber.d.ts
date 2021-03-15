export declare type Option = {
    shape: 'dash' | 'dot';
    space: boolean;
};
declare function dashPhoneNumber(str: string, option?: Option): string;
export default dashPhoneNumber;
