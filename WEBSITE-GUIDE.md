# Zane Foundation website guide

This is the practical operating guide for editing, publishing and maintaining the Zane Foundation website. You can make routine updates through GitHub without rebuilding the site locally.

## The five places you will normally edit

| What you want to change | File |
|---|---|
| Emails, domain, registration, office, phone and map | `lib/site.ts` |
| Articles, guidance and news | `content/stories.json` |
| Job vacancies | `content/opportunities.json` |
| Temporary photographs | `public/images/editorial/` |
| Logo and brand reference | `public/brand/` |

Do not edit `.next`, `node_modules`, `package-lock.json` or anything in the Vercel build output.

## Edit the website through GitHub

1. Open the `Azh4aa/ZaneFoundation` repository.
2. Open the file you need from the table above.
3. Select the pencil icon, make the edit and use the **Preview** tab to check it.
4. Select **Commit changes**.
5. Use a short description such as `Update office address` or `Publish September article`.
6. Commit to `main`. Vercel will deploy the change automatically when the repository is connected.
7. Wait for the Vercel deployment to show **Ready**, then check both `/en` and `/ku` on a phone and a computer.

For major design or structural changes, make a separate branch or ask for a reviewed update before committing to `main`.

## Complete the registration and office details

Open `lib/site.ts` and find `export const site` near the top.

- `registrationNumber`: leave empty while registration is in progress. After the seal, add the exact certificate number.
- `registrationStatus`: change only if the official status changes.
- `officeAddress.en` and `officeAddress.ku`: add the complete visitor address in both languages.
- `officeNote`: shown only while the address is empty.
- `workingHours`: publish office hours or keep meetings by appointment.
- `phone`: use the international format, for example `+964...`. Leave empty until the line is active.
- `mapUrl`: paste the public Google Maps share link. Leave empty until the office pin is correct.
- `url`: replace only if the final domain differs from `zanefoundation.org`.
- Email fields: replace a mailbox only after it exists and someone is responsible for checking it.

After registration, also update the exact legal English and Kurdish name if the certificate uses different wording.

## Activate the volunteer and careers forms

The forms are already built. Delivery requires Resend and the real domain.

1. Create the official email domain.
2. Verify the domain in Resend.
3. Create a Resend API key.
4. In Vercel, open **Project → Settings → Environment Variables**.
5. Add the three values shown in `.env.example`.
6. Redeploy.
7. Submit one Kurdish and one English test for volunteering and careers.
8. Confirm the receiving mailbox, reply address and spam handling.

Never request medical records, identity documents or sensitive family information through these forms.

## Publish an article

Articles live in `content/stories.json`. The detailed structure and consent rules are in `content/README.md`.

Use these public content types:

- **Guidance:** practical information reviewed by a qualified person.
- **Program update:** what Zane did, where and with whom.
- **Learning brief:** what was learned and what will change.
- **News:** a dated institutional announcement.
- **Case study:** only after the work happened, the result was checked and every identifiable person gave informed consent.

Every article needs complete English and Kurdish versions. Do not publish a Kurdish translation that has not been read aloud and approved by a fluent Sorani editor.

### Editorial rule

Write what happened, who it concerned, what Zane did and what comes next. Avoid inflated words such as *transformative*, *life-changing*, *historic* or *unprecedented* unless a verifiable source justifies them.

## Publish a vacancy

Vacancies live in `content/opportunities.json`. When the list is empty, the site correctly says that no positions are open.

Every vacancy should include:

- exact job title;
- location and working arrangement;
- contract type and duration;
- responsibilities and selection requirements;
- salary range when approved for publication;
- application deadline and time zone;
- safeguarding requirements;
- equal-opportunity statement;
- application method.

Remove or archive the entry when the deadline passes.

## Replace the temporary photographs

The current editorial photographs are temporary, fictional illustrations. They must never be presented as evidence of a Zane activity, participant or result.

Commission photographs in the same landscape proportion and replace these files without changing their names:

- `community-workshop.jpg` — homepage; everyday participation and choice.
- `inclusive-classroom.jpg` — programs; a learner participating with classmates.
- `community-employment.jpg` — progress page; adult responsibility and work.

Recommended delivery: JPG, 3:2 landscape, at least 2400 × 1600 pixels, natural light, no watermark, no text embedded in the image.

### Photography brief

Photograph ordinary life rather than charity poses: learning, choosing, working, making, speaking, travelling and spending time with others. The person with Down syndrome should be an active participant, not a symbol held or watched by other people.

Before photographing or publishing:

- obtain informed written consent in a language the person understands;
- obtain guardian consent where legally required without replacing the person’s own assent;
- explain the website, social-media and archive uses separately;
- record whether a real name may be used;
- avoid medical, financial or family details that are not necessary;
- provide a clear process for withdrawing future use.

## Kurdish editorial standard

- Write Sorani as original Kurdish, not word-for-word English.
- Prefer short sentences with one clear action.
- Use `هەموو کەسێک` where the meaning is *everyone*.
- Use `کەسانی خاوەن سندرۆمی داون` consistently.
- Describe the person before the condition or service.
- Prefer direct verbs: `کار دەکات`, `بڵاودەکاتەوە`, `دیاری دەکات`, `دەپێورێت`.
- Avoid proposal language, unnecessary English loanwords and exaggerated praise.
- Read headings aloud before publishing; if they sound translated, rewrite them.

## Institutional writing standard

The site is not a funding appeal. It should state:

- what Zane is;
- the population and geography it serves;
- the four areas of work;
- the applicable standard or procedure;
- whether information is current, planned or still pending;
- the correct route for contact.

Never claim a service, partnership, staff position, participant number or result until it exists and can be documented.

## Recommended publishing workflow

1. Draft in English or Kurdish—whichever language the writer knows best.
2. Check names, dates, figures and links against source documents.
3. Produce the second language as a fresh edit, not a literal translation.
4. Obtain program, safeguarding and Kurdish-language approval where relevant.
5. Publish through GitHub.
6. Check the live English and Kurdish page.
7. Record the publication and consent documents in the foundation’s internal files.

## Before the registrar receives the final link

- Confirm the legal name and registration status shown on the governance page.
- Confirm the logo is the approved mark.
- Confirm the general email receives mail.
- Confirm the office wording is accurate.
- Remove any vacancy that is not genuinely open.
- Test every menu item in Kurdish and English.
- Test the website on a phone.
- Keep donation checkout disabled until registration, banking, receipting and refund procedures are complete.

## Before the full public launch

- Publish the final registration number and office details.
- Approve full safeguarding, privacy, complaints, conflict-of-interest and whistleblowing policies.
- Name the board and leadership only after their roles are formally approved.
- Assign an owner and response time for every public mailbox.
- Replace temporary photography with consented Zane photography.
- Complete a final accessibility review.
- Create a quarterly schedule for articles, program updates and policy reviews.

## If an update goes wrong

Open the repository’s **Commits** page, select the last correct version and use **Revert**. Vercel will publish the restored version. Do not delete the repository or disconnect the domain to fix a content mistake.
