import { BiLogOutCircle, BiSupport } from "react-icons/bi";
import { BsBank, BsCardChecklist, BsEmojiSmile } from "react-icons/bs";
import { CgList, CgProfile } from "react-icons/cg";
import { FaRegAddressBook, FaRegStar, FaRegUser } from "react-icons/fa";
import { FiInfo, FiLogOut } from "react-icons/fi";
import { GoDashboard } from "react-icons/go";
import { MdLanguage, MdOutlineSupportAgent } from "react-icons/md";

export const dashboardItem = [
    {
        pathName: "dashboard",
        icon: <GoDashboard className="text-blue-600" />,
        name: "Dashboard"
    },
    {
        pathName: "profile",
        icon: <FaRegUser className="text-blue-600" />,
        name: "Profile Update"
    },
    {
        pathName: "bookings",
        icon: <CgList className="text-blue-600" />,
        name: "Business List"
    },
    {
        pathName: "wishList",
        icon: <BsCardChecklist className="text-blue-600" />,
        name: "Business Detail Page"
    },
    {
        pathName: "change-password",
        icon: <BiSupport className="text-blue-600" />,
        name: "Leads"
    },
    {
        pathName: "",
        icon: <FiLogOut className="text-blue-600" />,
        name: "Chat Support"
    },
    {
        pathName: "",
        icon: <FiLogOut className="text-blue-600" />,
        name: "Logout"
    },
]

export const mobileFirstNav = [
    {
        id: 1,
        title: 'Birthday Party',
        icon: <BsBank />,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 2,
        title: 'Pre Wedding Shoot',
        icon: <BsBank />,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 3,
        title: 'Marriage Celebration',
        icon: <BsBank />,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 4,
        title: 'Candlelight',
        icon: <BsBank />,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 5,
        title: 'Event Organizers',
        icon: <BsBank />,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
]

export const mobileInnerNav = [
    {
        id: 1,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 2,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 3,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 4,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
    {
        id: 5,
        childCaty: [
            {
                title: 'Inner Category One',
                icon: <BsBank />,
            },
            {
                title: 'Inner Category Two',
                icon: <BsBank />,
            },
        ]
    },
]

export const profileOpt = [
    {
        id: 'profile',
        opt: 'Your Profile',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'enquiry',
        opt: 'Enquiry',
        icon: <MdOutlineSupportAgent className="text-[16px]" />
    },
    {
        id: 'address',
        opt: 'Address Book',
        icon: <FaRegAddressBook className="text-[16px]" />
    },
    {
        id: 'rating',
        opt: 'Your Rating',
        icon: <FaRegStar className="text-[16px]" />
    },
    {
        id: 'feedback',
        opt: 'Your Feedback',
        icon: <BsEmojiSmile className="text-[16px]" />
    },
    {
        id: 'logout',
        opt: 'Logout',
        icon: <BiLogOutCircle className="text-[16px]" />
    },
]

export const profileOptInner = [
    {
        title: 'Your Profile',
    },
    {
        opt: 'Enquiry',
        icon: <MdOutlineSupportAgent className="text-[16px]" />
    },
    {
        opt: 'Address Book',
        icon: <FaRegAddressBook className="text-[16px]" />
    },
    {
        opt: 'Your Rating',
        icon: <FaRegStar className="text-[16px]" />
    },
    {
        opt: 'Language Change',
        icon: <MdLanguage className="text-[16px]" />
    },
    {
        opt: 'About',
        icon: <FiInfo className="text-[16px]" />
    },
    {
        opt: 'Logout',
        icon: <BiLogOutCircle className="text-[16px]" />
    },
]

export const profileData = [
    {
        id: 'profile_update',
        opt: 'Profile Update',
        icon: <BiLogOutCircle className="text-[16px]" />
    },
    {
        id: 'captured_leads',
        opt: 'Captured Leads',
        icon: <BsEmojiSmile className="text-[16px]" />
    },
    {
        id: 'service_update',
        opt: 'Service Update',
        icon: <FaRegStar className="text-[16px]" />
    },
    {
        id: 'address',
        opt: 'Promote Your Business',
        icon: <FaRegAddressBook className="text-[16px]" />
    },
    {
        id: 'notification',
        opt: 'Notification',
        icon: <MdOutlineSupportAgent className="text-[16px]" />
    },
    {
        id: 'help_desk',
        opt: 'Help Desk',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'app_rating',
        opt: 'App Rating',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'app_feedback',
        opt: 'App Feedback',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'report_module',
        opt: 'Report Module',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'privacy_policy',
        opt: 'Privacy Policy',
        icon: <CgProfile className="text-[16px]" />
    },
    {
        id: 'terms_condition',
        opt: 'Terms & Condition',
        icon: <CgProfile className="text-[16px]" />
    },
]