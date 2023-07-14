import { GetServerSidePropsContext } from "next";
import { useTranslations } from "next-intl";

export const runtime = "experimental-edge";

export default function About({ locale }) {
  const t = useTranslations();

  return (
    <div>
      <p>{locale}</p>
      <p>{t("Active bonuses")}</p>
      <p>{t("Do you have a bonus code?")}</p>
      {/*<p>{t("Do you have a bonus code2?")}</p>*/}
    </div>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  //const url = `https://www.betfinal.com/locales/${locale}/account.json`;
  //const response = await fetch(url);
  //const messages = await response.json();

  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      locale,
    },
  };
}
