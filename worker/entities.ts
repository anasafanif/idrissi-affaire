import { IndexedEntity } from "./core-utils";
import type { ContactSubmission } from "@shared/types";
// CONTACT SUBMISSION ENTITY: one DO instance per form submission
export class ContactSubmissionEntity extends IndexedEntity<ContactSubmission> {
    static readonly entityName = "contactSubmission";
    static readonly indexName = "contactSubmissions";
    static readonly initialState: ContactSubmission = {
        id: "",
        ts: 0,
        name: "",
        email: "",
        subject: "",
        message: "",
    };
}