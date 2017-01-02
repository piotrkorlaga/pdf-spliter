interface Options {
    from: number;
    to: number;
}

export class FormUploadModel {
    file: string = '';
    options: Options = {
        from: undefined,
        to: undefined
    };
}