import { zeroComponents } from "./Colors";
import { generateHint } from "./HintGenerator";
import { colorTable } from "./Levels";

test("generateHintEasy", () => {
    expect(generateHint(zeroComponents, colorTable[0])).toStrictEqual(
        "Add a little [yellow]"
    );
    expect(
        generateHint(zeroComponents, { cmyk: [57, 0, 56, 0] })
    ).toStrictEqual("Add a little [green]");
    expect(generateHint(zeroComponents, { cmyk: [0, 0, 51, 0] })).toStrictEqual(
        "Add some [yellow]"
    );
    expect(
        generateHint(zeroComponents, { cmyk: [0, 81, 81, 0] })
    ).toStrictEqual("Add lots of [red]");
});

test("generateHintFix", () => {
    expect(generateHint({...zeroComponents, black: 2 }, { cmyk: [100, 0, 0, 20] })).toStrictEqual(
        "Add lots of [cyan]"
    );
    expect(generateHint({...zeroComponents, magenta: 1, white:6 }, { cmyk: [0, 9, 27, 0] })).toStrictEqual(
        "Add lots of [yellow]"
    );
});

test("generateHintNegative", () => {
    expect(generateHint({...zeroComponents, white: 4 }, { cmyk: [51, 0, 100, 1], extraWinTolerance: 0.1 })).toStrictEqual(
        "It's easier to start over. You don't need [white]."
    );
});

test("generateHintHelpless", () => {
    expect(generateHint({...zeroComponents, blue: 15 }, { cmyk: [100, 25, 0, 20] })).toStrictEqual(
        "It's easier to start over"
    );
});
