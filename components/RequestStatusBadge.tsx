import { RequestStatus } from "@/lib/mock-data";

const styles: Record<RequestStatus, string> = {
  Pending: "bg-amber-100 text-amber-700 border border-amber-200",
  "In Progress": "bg-blue-100 text-blue-700 border border-blue-200",
  Completed: "bg-green-100 text-green-700 border border-green-200",
};

export function RequestStatusBadge({ status }: { status: RequestStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
