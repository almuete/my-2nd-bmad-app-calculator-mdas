# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e3]:
    - heading "PEPE" [level=1] [ref=e5]
    - group "Display" [ref=e6]:
      - heading "Display" [level=2] [ref=e7]
      - generic "Current expression" [ref=e8]
      - generic "Current result" [ref=e9]: "0"
      - status [ref=e10]
    - region "Keypad" [ref=e11]:
      - heading "Keypad" [level=2] [ref=e12]
      - generic [ref=e13]:
        - group "Action keys" [ref=e14]:
          - button "Clear" [ref=e15]: C
          - button "Backspace" [ref=e16]: ⌫
          - button "Equals" [ref=e17]: =
        - group "Operator keys" [ref=e18]:
          - button "Multiply" [ref=e19]: ×
        - group "Numeric keypad" [ref=e20]:
          - button "Decimal point" [ref=e21]: .
          - button "Digit 0" [ref=e22]: "0"
          - button "Digit 1" [ref=e23]: "1"
          - button "Digit 2" [ref=e24]: "2"
          - button "Digit 3" [ref=e25]: "3"
          - button "Digit 4" [ref=e26]: "4"
          - button "Digit 5" [ref=e27]: "5"
          - button "Digit 6" [ref=e28]: "6"
          - button "Digit 7" [ref=e29]: "7"
          - button "Digit 8" [ref=e30]: "8"
          - button "Digit 9" [ref=e31]: "9"
  - button "Open Next.js Dev Tools" [ref=e38] [cursor=pointer]:
    - img [ref=e39]
  - alert [ref=e42]
```