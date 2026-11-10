import * as FaIcons from 'react-icons/fa';
const contactDetails = [
  {
    label: 'Phone',
    value: '+963 996 567 957',
    href: 'tel:+963996567957',
    icon: "FaMobileAlt"
  },
  {
    label: 'Facebook',
    value: 'Visit my Facebook profile',
    href: 'https://www.facebook.com/hmza.alhosni',
    icon: "FaFacebook"
  },
  {
    label: 'Linked In',
    value: 'Visit my LinkedIn profile',
    href: 'https://www.linkedin.com/in/hamza-elhosni/',
    icon: "FaLinkedin"
  },
]

export default function ContactLinks() {

  return (
    <div className="space-y-3">
      {
      contactDetails.map( (detail) => 
      {
        const IconComponent = detail.icon ? (FaIcons as any)[detail.icon] : null;
        return (
        <a
          key={detail.label}
          href={detail.href}
          target={detail.href.startsWith('http') ? '_blank' : undefined}
          rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
          className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-green-400/60 hover:bg-white/[0.06]"
        >
        <span>{detail.label}</span>
        {IconComponent ? <IconComponent size={30} className="text-green-500" /> : null}

        </a>
      )}
    )
      
      
      }
    </div>
  )
}
