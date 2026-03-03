import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

const Header = async () => {
    const client = createClient();
    const page = await client.getSingle("home").catch(() => notFound());

  return (
    <div className="p-14 flex justify-between font-dm align-middle items-center">
        {/* importando título da página para teste */}
        <div className="font-black text-black text-2xl flex gap-6 items-center">
            <PrismicNextImage field={page.data.tslogo} alt="" width={80}/>
            <span>Tecno System</span>
        </div>
        <nav>
              <ul className="flex gap-6 font-bold text-lg ">
                  {/* Navigation links */}
                  {/* chama o item de navegação e escolhe o index(link) e a info(label) */}
                  {page.data.navigation?.map((item, index) => (
                      <li className="transition-all duration-300 text-xl uppercase ease-initial hover:text-red-600" key={index}>
                          <PrismicNextLink field={item.link as any}>{item.label}</PrismicNextLink>
                      </li>
                  ))
                  }
              </ul>
        </nav>
    </div>
  )
}

export default Header