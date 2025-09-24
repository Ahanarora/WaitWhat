import { List } from "react-native-paper";

type AnalysisPanelProps = {
  stakeholders: string[];
  faqs: string[];
  future: string[];
};

export default function AnalysisPanel({ stakeholders, faqs, future }: AnalysisPanelProps) {
  return (
    <List.AccordionGroup>
      <List.Accordion title="Key Stakeholders" id="1">
        {stakeholders.map((s, i) => (
          <List.Item key={i} title={s} />
        ))}
      </List.Accordion>
      <List.Accordion title="FAQs" id="2">
        {faqs.map((q, i) => (
          <List.Item key={i} title={q} />
        ))}
      </List.Accordion>
      <List.Accordion title="Questions for the Future" id="3">
        {future.map((q, i) => (
          <List.Item key={i} title={q} />
        ))}
      </List.Accordion>
    </List.AccordionGroup>
  );
}
