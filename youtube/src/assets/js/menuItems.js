import { CoinIcon, UserDefenderIcon, MoonIcon, LanguageIcon, UserCompactIcon, NetworkIcon, ShortCutIcon, HelpIcon, FeedbackIcon,SettingIcon, UserChanelIcon, YoutubeStudioIcon, SwapAccountIcon, LogOutIcon} from '~/assets/icons';
import {ChangeAccount, ListModel, RestrictedMode, ThemeModel} from '~/assets/js/components/model';
import {AvatarImg} from '~/assets/images';

const MENU_ITEMS = (APP_CONFIGS) => {
    return [
        {
            id: 1,
            listId: 1,
            icon: <UserChanelIcon width={24} height={24}/>,
            title: 'Kênh của bạn'
        },
        {
            id: 2,
            listId: 1,
            icon: <YoutubeStudioIcon width={24} height={24}/>,
            title: 'YouTube Studio',
        },
        {
            id: 3,
            listId: 1,
            icon: <SwapAccountIcon width={24} height={24}/>,
            title: 'Chuyển đổi tài khoản',
            children: {
                title: 'Tài khoản',
                model: (props) => <ChangeAccount {...props}/>,
                config: {height: 326.4, width: 300, top: 34 , left: 'unset', right: 0},
                data: {
                    userAccount: {
                        userImg: AvatarImg,
                        userName: 'Việt Bảo',
                        subcriber: '2 người đăng ký',
                        userEmail: 'vietbao2k2@gmail.com'    
                    }
                }
            }
        },
        {
            id: 4,
            listId: 1,
            icon: <LogOutIcon width={24} height={24}/>,
            title: 'Đăng xuất',
        },
        {
            id: 5,
            listId: 2,
            icon: <CoinIcon width={24} height={24}/>,
            title: 'Giao dịch mua và gói thành viên'
        },
        {
            id: 6,
            listId: 2,
            icon: <UserDefenderIcon width={24} height={24}/>,
            title: 'Dữ liệu của bạn trong YouTube'
        },
        {
            id: 7,
            listId: 3,
            icon: <MoonIcon width={24} height={24}/>,
            title: 'Giao diện: Giao diện thiết bị',
            children: {
                title: 'Giao diện',
                model: (props) => <ThemeModel {...props}/>,
                config: {height: 224.8, width: 300, top: 34 , left: 'unset', right: 0},
                data: [
                    {
                        title: 'Dùng giao diện của thiết bị',
                        value: 'device'
                    },
                    {
                        title: 'Giao diện tối',
                        value: 'dark'
                    },
                    {
                        title: 'Giao diện sáng',
                        value: 'light'
                    }
                ]
            }
        },
        {
            id: 8,
            listId: 3,
            icon: <LanguageIcon width={24} height={24}/>,
            title: `Ngôn ngữ: ${APP_CONFIGS.language}`,
            children: {
                title: 'Chọn ngôn ngữ của bạn',
                model: (props) => <ListModel {...props}/>,
                // <ListModel item={item} value: APP_CONFIGS.language
                config: {height: 739, width: 300, top: 0 , left: -300, right: 'unset'},
                data: [      
                    'Afrikaans',
                    'Azərbaycan',
                    'Bahasa Indonesia',
                    'Bahasa Malaysia',
                    'Bosanski',
                    'Català',
                    'Čeština',
                    'Dansk',
                    'Deutsch',
                    'Eesti',
                    'English (India)',
                    'English (UK)',
                    'English (US)',
                    'Español (España)',
                    'Español (Latinoamérica)',
                    'Español (US)',
                    'Euskara',
                    'Filipino',
                    'Français',
                    'Français (Canada)',
                    'Galego',
                    'Hrvatski',
                    'IsiZulu',
                    'Íslenska',
                    'Italiano',
                    'Kiswahili',
                    'Latviešu valoda',
                    'Lietuvių',
                    'Magyar',
                    'Nederlands',
                    'Norsk',
                    'O‘zbek',
                    'Polski',
                    'Português',
                    'Português (Brasil)',
                    'Română',
                    'Shqip',
                    'Slovenčina',
                    'Slovenščina',
                    'Srpski',
                    'Suomi',
                    'Svenska',
                    'Tiếng Việt',
                    'Türkçe',
                    'Беларуская',
                    'Български',
                    'Кыргызча',
                    'Қазақ Тілі',
                    'Македонски',
                    'Монгол',
                    'Русский',
                    'Српски',
                    'Українська',
                    'Ελληνικά',
                    'Հայերեն',
                    'עברית',
                    'اردو',
                    'العربية',
                    'فارسی',
                    'नेपाली',
                    'मराठी',
                    'हिन्दी',
                    'অসমীয়া',
                    'বাংলা',
                    'ਪੰਜਾਬੀ',
                    'ગુજરાતી',
                    'ଓଡ଼ିଆ',
                    'தமிழ்',
                    'తెలుగు',
                    'ಕನ್ನಡ',
                    'മലയാളം',
                    'සිංහල',
                    'ภาษาไทย',
                    'ລາວ',
                    'ဗမာ',
                    'ქართული',
                    'አማርኛ',
                    'ខ្មែរ',
                    '中文 (简体)',
                    '中文 (繁體)',
                    '中文 (香港)',
                    '日本語',
                    '한국어',
                ]
            }
        },
        {
            id: 9,
            listId: 3,
            icon: <UserCompactIcon width={24} height={24}/>,
            title: `Chế độ hạn chế: ${APP_CONFIGS.restrictedMode ? 'Đã bật' : 'Đã tắt'}`,
            children: {
                model: (props) => <RestrictedMode {...props}/>,
                title: 'Chế độ hạn chế',
                config: {height: 254.8, width: 300, top: 34 , left: 'unset', right: 0},
            }
        },
        {
            id: 10,
            listId: 3,
            icon: <NetworkIcon width={24} height={24}/>,
            title: `Địa điểm: ${APP_CONFIGS.localtion}`,
            children: {
                title: 'Chọn vị trí của bạn',
                model: (props) => <ListModel {...props}/>,
                config: {height: 739, width: 300, top: 0 , left: -300, right: 'unset'},
                data: [ 'Ả-Rập Xê-út', 'Ai Cập', 'Algeria', 'Áo', 'Argentina', 'Azerbaijan', 'Ấn Độ', 'Ba Lan', 'Bahrain', 'Bangladesh', 'Bắc Macedonia', 'Belarus', 'Bỉ', 'Bolivia', 'Bosnia và Herzegovina', 'Bồ Đào Nha', 'Brazil', 'Bungary', 'Các Tiểu Vương quốc Ả Rập Thống nhất', 'Campuchia', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Cộng hoà Dominica', 'Croatia', 'Đài Loan', 'Đan Mạch', 'Đảo Síp', 'Đức', 'Ecuador', 'El Salvador', 'Estonia', 'Georgia', 'Ghana', 'Guatemala', 'Hà Lan', 'Hàn Quốc', 'Hoa Kỳ', 'Honduras', 'Hồng Kông', 'Hungary', 'Hy Lạp', 'Iceland', 'Indonesia', 'Iraq', 'Ireland', 'Israel', 'Jamaica', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Lào', 'Latvia', 'Lebanon', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Ma-rốc', 'Malaysia', 'Malta', 'Mexico', 'Montenegro', 'Na Uy', 'Nam Phi', 'Nepal', 'New Zealand', 'Nga', 'Nhật Bản', 'Nicaragua', 'Nigeria', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Pháp', 'Phần Lan', 'Philipin', 'Puerto Rico', 'Qatar', 'Rumani', 'Séc', 'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'Sri Lanka', 'Tanzania', 'Tây Ban Nha', 'Thái Lan', 'Thổ Nhĩ Kỳ', 'Thuỵ Điển', 'Thuỵ Sĩ', 'Tunisia', 'Úc', 'Uganda', 'Ukraina', 'Uruguay', 'Venezuela', 'Việt Nam', 'Vương quốc Anh', 'Ý', 'Yemen', 'Zimbabwe',    ]
            }
        },
        {
            id: 11,
            listId: 3,
            icon: <ShortCutIcon width={24} height={24}/>,
            title: 'Phím tắt'
        },
    
        {
            id: 12,
            listId: 4,
            icon: <SettingIcon width={24} height={24}/>,
            title: 'Cài đặt'
        },
        {
            id: 13,
            listId: 5,
            icon: <HelpIcon width={24} height={24}/>,
            title: 'Trợ giúp'
        },
        {
            id: 14,
            listId: 5,
            icon: <FeedbackIcon width={24} height={24}/>,
            title: 'Gửi phản hồi'
        },
    ]
}

export default MENU_ITEMS