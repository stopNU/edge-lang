//import { GetServerSidePropsContext } from "next";
import useTranslation from "next-translate/useTranslation";
//import getT from "next-translate/getT";
//import Link from "next/link";

export const runtime = "experimental-edge";

export default function About({ locale }) {
  const { t } = useTranslation("home");
  const description = t("description");
  const title = t("title");
  const testcommon = t("common:test");

  return (
    <div>
      <p>{locale}</p>
      <h1>Title: {title}</h1>
      <p>Desc: {description}</p>
      <p>Test: {testcommon}</p>
      {/* <Link href='/more-examples'>{linkName}</Link> */}
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  //const t = await getT(locale, ["common", "home"]);
  return {
    props: {
      locale,
      //title: t("common: title"),
      //description: t("home:description"),
    },
  };
}
