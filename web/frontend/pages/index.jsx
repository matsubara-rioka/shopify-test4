import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard,ResourceSelector } from "../components";
import { useAppQuery } from "../hooks";
export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Product Counter & Selector" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
        <Layout.Section>
          <ResourceSelector />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
