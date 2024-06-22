import { test } from "node:test"
import assert from "node:assert"
test("some test", (t) => {
    assert.strictEqual(1, 1)
})

test("second basic test", () => {
    assert.equal(2, 2)
})