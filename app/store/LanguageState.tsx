import { create } from "zustand";
import { persist } from "zustand/middleware";

type languageState = {
    language: "eng" | "vie"
    toggleLang: (lang: "eng" | "vie") => void;
}

export const useLanguage = create<languageState>()(persist(
    set => ({
        language: "eng",

        toggleLang(lang) {
            set(() => ({language: lang}))
        },
    }), {
        name: "fusen_language"
    }
))