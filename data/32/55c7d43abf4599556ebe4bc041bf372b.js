callback({
  "levelNumber": 32,
  "size": 15,
  "steps": 31,
  "successRatio": 1,
  "author": "kyanet",
  "hash": "55c7d43abf4599556ebe4bc041bf372b",
  "path": "32-Inventory-Report-16.393/15.31-kyanet.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 15/16 - SPEED 31/393 --\n\n    BUMPUP   14\n    BUMPUP   14\n    COPYTO   15\n    ADD      14\n    COPYTO   16\n    JUMP     d\na:\n    ADD      16\nb:\n    ADD      14\nc:\n    OUTBOX\nd:\n    INBOX\n    SUB      4\n    JUMPN    a\n    JUMPZ    b\n    BUMPUP   15\n    JUMP     c\n\n"
});