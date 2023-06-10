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
                {
                    name: "preventOverflow",
                    options: {
                        altAxis: true,
                        padding: { left: 0, right: 20},
                    },
                },
            ],
        },
    };
}
