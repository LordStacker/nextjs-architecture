#  [section] (Dynamic Route Segment)

This folder represents the dynamic `section` of a hello world route under `/advanced/[advanced]/`.

##  Matches routes like:
- /advanced/gpt/settings
- /advanced/DinamycView/DinamycSection


## Purpose:
This allows multiple nested views per tool , reusing a single `page.tsx` with dynamic rendering based on the `section` name.

##  Accessing values:
```tsx
const { advanced, section } = useParams();
