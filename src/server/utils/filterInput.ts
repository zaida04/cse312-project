export function filterInput(input: Record<string, any>, inputFields: string[]) {
    return inputFields.reduce((acc, field) => {
        return {
            ...acc,
            [field]: input[field]
        }
    }, {})
}