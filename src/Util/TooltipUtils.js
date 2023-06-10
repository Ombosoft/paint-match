export default function shiftPopper(x, y) {
    return {
        PopperProps: {
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [x, y],
                    },
                },
            ],
        },
    };
}
