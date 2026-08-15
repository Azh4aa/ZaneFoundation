# Publishing stories and learning notes

The public articles are stored in `content/stories.json`. This keeps the first
release fast, secure, and free of a database or paid CMS.

To publish a new item:

1. Duplicate one complete article object in `stories.json`.
2. Give it a unique lowercase `slug`, for example `teacher-training-pilot`.
3. Fill both the English (`en`) and Kurdish (`ku`) fields.
4. Use an honest kind: `Institutional brief`, `Program update`, `Learning brief`,
   `Report`, or `Consented story`.
5. Never publish a child’s name, image, diagnosis, school, or identifiable
   details without documented informed consent and a safeguarding review.
6. Run `npm test` and `npm run build` before publishing.

Case studies should be published only after the program has actually delivered
work, the result has been verified and the person or family has given informed
consent. Until then, use institutional briefs, program updates and learning
briefs. This avoids presenting plans as evidence.
