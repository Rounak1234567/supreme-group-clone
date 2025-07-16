// components/Footer/FooterColumn.tsx

type LinkItem = string | { label: string; url: string; external?: boolean };

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold mb-8 text-base tracking-wide">{title}</h3>
      <ul className="space-y-5">
        {links.map((link, idx) => {
          if (typeof link === "string") {
            return (
              <li key={idx}>
                <a href="#" className="hover:text-[#2175bb] transition">
                  {link}
                </a>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a
                  href={link.url}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hover:text-[#2175bb] transition"
                >
                  {link.label}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FooterColumn;
