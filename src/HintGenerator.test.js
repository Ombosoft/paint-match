import { zeroComponents } from "./Colors";
import generateHint from "./HintGenerator";
import { colorTable } from "./Levels";

test("generateHint", () => {
    expect(generateHint(zeroComponents, colorTable[0])).toStrictEqual("Add a little yellow");
});
