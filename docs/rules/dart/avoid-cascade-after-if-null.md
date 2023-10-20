# avoid-cascade-after-if-null

Warns when a cascade expression is used after if null (??) binary expression without parentheses.

Not adding parentheses might lead to unexpected results since cascade will be executed **after** if null expression.

Additional resources:

- [https://github.com/dart-lang/sdk/issues/45667](https://github.com/dart-lang/sdk/issues/45667)

## Example

### Bad:

```dart
class Cow {
  void moo() {}
}

class Ranch {
  final Cow? _cow;

  Ranch([Cow? cow])
      : _cow = cow ?? Cow()
          ..moo(); // LINT
}

void main() {
  final Cow? nullableCow;

  final cow = nullableCow ?? Cow()
    ..moo(); // LINT
}
```

### Good:

```dart
void main() {
  final Cow? nullableCow;

  final cow = (nullableCow ?? Cow())..moo();
  final cow = nullableCow ?? (Cow()..moo());
}
```
