callback({
  "levelNumber": 35,
  "size": 16,
  "steps": 156,
  "successRatio": 1,
  "author": "sniperrifle2004",
  "hash": "9ac4e8377ace8496397ea88d373ac1c1",
  "path": "35-Duplicate-Removal-17.167/16.156-sniperrifle2004.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 35-Duplicate-Removal - SIZE 16/17 - SPEED 156/167 --\r\n\r\n    INBOX   \r\n    JUMP     b\r\na:\r\n    BUMPUP   14\r\n    COPYFROM 12\r\nb:\r\n    COPYTO   [14]\r\n    OUTBOX  \r\nc:\r\n    INBOX   \r\n    COPYTO   12\r\n    COPYFROM 14\r\n    COPYTO   13\r\nd:\r\n    COPYFROM 12\r\n    SUB      [13]\r\n    JUMPZ    c\r\n    BUMPDN   13\r\n    JUMPN    a\r\n    JUMP     d\r\n\r\n\r\nDEFINE LABEL 12\r\neJwTZWBg8IxT87ZJmN7CkrB9JpDLEBfPZVKf/ceSv8LPeua0GFPrfgN3kLhNgkDZlfwTBQklJwqelJ7N\r\nA4k9zUiY9Tszeo5u/v95/BWBCxQnBy5gGAWjYBQMGQAA29gd+Q;\r\n\r\nDEFINE LABEL 13\r\neJzjYmBgkMhjjkzNL8vvL9xSIVz8snVt6a8FT0onrARKMRzOfCX3O9NcCcReUVUySbj4zTLd/CPbUvN3\r\n7Uoo0b2YUS55c2vFoZtfq/vOhNdt3fO3rnzz37q2teF1lqtu11/eEN/I8HhN0+N3Qc32b0BmXJ34bZFg\r\nr/Oy0G6tDc+6tu652XPtosukzfcFZk18+3ZW0+dfM658uTul/eP2Xt9nIPUb1hhnOK4x63yx5si2v2td\r\njwutNz/buUn3Ysv2i5fldtVfAqm5vmzCSp8jPosYRsEoGAUkAwCG4Ghb;\r\n\r\nDEFINE LABEL 14\r\neJwzY2BgSPE1dZ3tyxH+1jO28pe76iYZ9+TdTN7S2xoDT24piLi84VHC5Q1AZQwrc+93bssWnn465+SW\r\nlbn7dzQVb90zo2TXrozyG+sWlHssWVrkX3++5El7d9mK+fwVJmsu1bDvu10/55hXQ9xekP6bPYbdR7oN\r\nu5M6KyfktyfMWt7+a0FS5/MV23trNh6YELm/Y8KyQ9t7Px/l7JpzDKR+zrwtFf5zl9U9mDO95fRslrmn\r\nZ3evTp2Xu11jMc8et+Vb90SvSN7NuHL/DpUVRVtB6rnn+yyqXJM648gupYkMo2AUjAKiAACSt2od;\r\n\r\n"
});