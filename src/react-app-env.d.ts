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
}