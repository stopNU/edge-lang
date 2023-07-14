// Use type safe message keys with `next-intl`
//type Messages = typeof import("./messages/en.json");
type Messages = typeof import("./messages/en.json");
//type Messages2 = typeof import("./messages/en/test.json");
declare interface IntlMessages extends Messages {}
