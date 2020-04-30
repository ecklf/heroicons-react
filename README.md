## Heroicons React

[![npm version](https://img.shields.io/npm/v/heroicons-react.svg)](https://www.npmjs.com/package/heroicons-react)
[![npm downloads](https://img.shields.io/npm/dm/heroicons-react.svg)](https://www.npmjs.com/package/heroicons-react)

### Installation

```sh
yarn add heroicons-react
```

```sh
npm install heroicons-react
```

### Usage

```javascript
import React from "react";
import { Sparkles } from "heroicons-react";

const App = () => {
  return <Sparkles />;
};

export default App;
```

Flags can be sized - based on height (default: 15)

```javascript
<Sparkles size={30} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icons from "heroicons-react";

const App = () => {
  return <Icons.Sparkles />;
};

export default App;
```

### Available Icons

```md
.
├── Adjustments
├── AdjustmentsOutline
├── Annotation
├── AnnotationOutline
├── Archive
├── ArchiveOutline
├── ArrowCircleDown
├── ArrowCircleDownOutline
├── ArrowCircleLeft
├── ArrowCircleLeftOutline
├── ArrowCircleRight
├── ArrowCircleRightOutline
├── ArrowCircleUp
├── ArrowCircleUpOutline
├── ArrowDown
├── ArrowDownOutline
├── ArrowLeft
├── ArrowLeftOutline
├── ArrowNarrowDown
├── ArrowNarrowDownOutline
├── ArrowNarrowLeft
├── ArrowNarrowLeftOutline
├── ArrowNarrowRight
├── ArrowNarrowRightOutline
├── ArrowNarrowUp
├── ArrowNarrowUpOutline
├── ArrowRight
├── ArrowRightOutline
├── ArrowUp
├── ArrowUpOutline
├── AtSymbol
├── AtSymbolOutline
├── BadgeCheck
├── BadgeCheckOutline
├── Ban
├── BanOutline
├── Bell
├── BellOutline
├── BookOpen
├── BookOpenOutline
├── Bookmark
├── BookmarkAlt
├── BookmarkAltOutline
├── BookmarkOutline
├── Briefcase
├── BriefcaseOutline
├── Calendar
├── CalendarOutline
├── Camera
├── CameraOutline
├── Cash
├── CashOutline
├── ChartBar
├── ChartBarOutline
├── ChartPie
├── ChartPieOutline
├── ChartSquareBar
├── ChartSquareBarOutline
├── Chat
├── ChatAlt
├── ChatAlt2
├── ChatAlt2Outline
├── ChatAltOutline
├── ChatOutline
├── Check
├── CheckCircle
├── CheckCircleOutline
├── CheckOutline
├── CheveronDown
├── CheveronDownOutline
├── CheveronLeft
├── CheveronLeftOutline
├── CheveronRight
├── CheveronRightOutline
├── CheveronUp
├── CheveronUpOutline
├── Clipboard
├── ClipboardCheck
├── ClipboardCheckOutline
├── ClipboardCopy
├── ClipboardCopyOutline
├── ClipboardList
├── ClipboardListOutline
├── ClipboardOutline
├── Clock
├── ClockOutline
├── CloudDownload
├── CloudDownloadOutline
├── CloudUpload
├── CloudUploadOutline
├── Code
├── CodeOutline
├── Cog
├── CogOutline
├── Collection
├── CollectionOutline
├── ColorSwatch
├── ColorSwatchOutline
├── CreditCard
├── CreditCardOutline
├── CurrencyDollar
├── CurrencyDollarOutline
├── CurrencyEuro
├── CurrencyEuroOutline
├── CurrencyPound
├── CurrencyPoundOutline
├── CurrencyRupee
├── CurrencyRupeeOutline
├── CurrencyYen
├── CurrencyYenOutline
├── CursorClick
├── CursorClickOutline
├── DesktopComputer
├── DesktopComputerOutline
├── Document
├── DocumentAdd
├── DocumentAddOutline
├── DocumentDownload
├── DocumentDownloadOutline
├── DocumentDuplicate
├── DocumentDuplicateOutline
├── DocumentOutline
├── DocumentRemove
├── DocumentRemoveOutline
├── DocumentReport
├── DocumentReportOutline
├── DotsCircleHorizontal
├── DotsCircleHorizontalOutline
├── DotsHorizontal
├── DotsHorizontalOutline
├── DotsVertical
├── DotsVerticalOutline
├── Download
├── DownloadOutline
├── Duplicate
├── DuplicateOutline
├── EmojiHappy
├── EmojiHappyOutline
├── EmojiSad
├── EmojiSadOutline
├── Exclamation
├── ExclamationCircle
├── ExclamationCircleOutline
├── ExclamationOutline
├── ExternalLink
├── ExternalLinkOutline
├── Eye
├── EyeOff
├── EyeOffOutline
├── EyeOutline
├── Filter
├── FilterOutline
├── Flag
├── FlagOutline
├── Folder
├── FolderOutline
├── Globe
├── GlobeAlt
├── GlobeAltOutline
├── GlobeOutline
├── Hashtag
├── HashtagOutline
├── Heart
├── HeartOutline
├── Home
├── HomeOutline
├── Inbox
├── InboxIn
├── InboxInOutline
├── InboxOutline
├── InformationCircle
├── InformationCircleOutline
├── Key
├── KeyOutline
├── Library
├── LibraryOutline
├── LightBulb
├── LightBulbOutline
├── LightningBolt
├── LightningBoltOutline
├── Link
├── LinkOutline
├── LocationMarker
├── LocationMarkerOutline
├── LockClosed
├── LockClosedOutline
├── LockOpen
├── LockOpenOutline
├── Logout
├── LogoutOutline
├── Mail
├── MailOpen
├── MailOpenOutline
├── MailOutline
├── Menu
├── MenuAlt1
├── MenuAlt1Outline
├── MenuAlt2
├── MenuAlt2Outline
├── MenuAlt3
├── MenuAlt3Outline
├── MenuAlt4
├── MenuAlt4Outline
├── MenuOutline
├── Microphone
├── MicrophoneOutline
├── MinusCircle
├── MinusCircleOutline
├── Moon
├── MoonOutline
├── Newspaper
├── NewspaperOutline
├── OfficeBuilding
├── OfficeBuildingOutline
├── PaperClip
├── PaperClipOutline
├── Pause
├── PauseOutline
├── Pencil
├── PencilAlt
├── PencilAltOutline
├── PencilOutline
├── Phone
├── PhoneIncoming
├── PhoneIncomingOutline
├── PhoneOutgoing
├── PhoneOutgoingOutline
├── PhoneOutline
├── Photograph
├── PhotographOutline
├── Play
├── PlayOutline
├── Plus
├── PlusCircle
├── PlusCircleOutline
├── PlusOutline
├── Printer
├── PrinterOutline
├── Qrcode
├── QrcodeOutline
├── QuestionMarkCircle
├── QuestionMarkCircleOutline
├── ReceiptRefund
├── ReceiptRefundOutline
├── Refresh
├── RefreshOutline
├── Reply
├── ReplyOutline
├── Scale
├── ScaleOutline
├── Search
├── SearchOutline
├── Selector
├── SelectorOutline
├── Share
├── ShareOutline
├── ShieldCheck
├── ShieldCheckOutline
├── ShieldExclamation
├── ShieldExclamationOutline
├── ShoppingCart
├── ShoppingCartOutline
├── SortAscending
├── SortAscendingOutline
├── SortDescending
├── SortDescendingOutline
├── Sparkles
├── SparklesOutline
├── Speakerphone
├── SpeakerphoneOutline
├── Star
├── StarOutline
├── Stop
├── StopOutline
├── Sun
├── SunOutline
├── Support
├── SupportOutline
├── SwitchHorizontal
├── SwitchHorizontalOutline
├── SwitchVertical
├── SwitchVerticalOutline
├── Tag
├── TagOutline
├── Template
├── TemplateOutline
├── Terminal
├── TerminalOutline
├── Ticket
├── TicketOutline
├── Translate
├── TranslateOutline
├── Trash
├── TrashOutline
├── TrendingDown
├── TrendingDownOutline
├── TrendingUp
├── TrendingUpOutline
├── Upload
├── UploadOutline
├── User
├── UserAdd
├── UserAddOutline
├── UserCircle
├── UserCircleOutline
├── UserGroup
├── UserGroupOutline
├── UserOutline
├── UserRemove
├── UserRemoveOutline
├── Users
├── UsersOutline
├── ViewBoards
├── ViewBoardsOutline
├── ViewGridAdd
├── ViewGridAddOutline
├── ViewList
├── ViewListOutline
├── VolumeOff
├── VolumeOffOutline
├── VolumeUp
├── VolumeUpOutline
├── X
├── XCircle
├── XCircleOutline
├── XOutline
├── ZoomIn
├── ZoomInOutline
├── ZoomOut
└── ZoomOutOutline
```
