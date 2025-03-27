import crypto from "crypto";
import { prisma } from "../db";

interface AuditLogInput {
  userId: string;
  action: string;
  details: string;
}

export async function logImmutableAction({
  userId,
  action,
  details,
}: AuditLogInput): Promise<any> {
  // Retrieve the most recent audit log to build the hash chain
  const lastLog = await prisma.auditLog.findFirst({
    orderBy: { timestamp: "desc" },
  });
  const previousHash = lastLog?.hash || "";
  const dataToHash = userId + action + details + previousHash;
  const hash = crypto.createHash("sha256").update(dataToHash).digest("hex");

  return await prisma.auditLog.create({
    data: {
      userId,
      action,
      details,
      hash,
      timestamp: new Date(),
    },
  });
}
