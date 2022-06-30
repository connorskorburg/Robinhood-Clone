/// <reference types="react-scripts" />

declare namespace DashboardTypes {
    interface ArticleItem {
        headline: string;
        source: string;
        datetime: string | Date;
        image: string;
        url: string;
        summary: string;
    }

    type OptionType = "5dm" | "1m" | "3m" | '6m' | 'ytd' | "1y" | "max";
}