// src/components/Layout.tsx
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container, Header, NavLink, NavStack, Content } from "./Layout.styles";
import LanguageSelector from "../languageSelector/LanguageSelector";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { token } = useSelector((store: { user: any }) => store.user);
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <NavStack>
          <NavLink to="/">{t("main")}</NavLink>
          <LanguageSelector />
        </NavStack>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
