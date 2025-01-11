/**
 * Kennel List Page
 * 
 * Displays a list of all kennels with their current status and allows filtering
 * based on size, availability, and date range.
 */

import { type NextPage } from "next";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useRouter } from "next/router";
import { Calendar } from "~/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Badge } from "~/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/lib/utils";

const KennelListPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const { data: kennels, isLoading } = api.kennel.getAll.useQuery(
    {
      size: selectedSize as "SMALL" | "MEDIUM" | "LARGE" | "EXTRA_LARGE" | undefined,
      status: selectedStatus as
        | "AVAILABLE"
        | "OCCUPIED"
        | "MAINTENANCE"
        | "RESERVED"
        | undefined,
      startDate: dateRange.from,
      endDate: dateRange.to,
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-800";
      case "OCCUPIED":
        return "bg-blue-100 text-blue-800";
      case "MAINTENANCE":
        return "bg-yellow-100 text-yellow-800";
      case "RESERVED":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSizeDescription = (size: string) => {
    switch (size) {
      case "SMALL":
        return "Ideal for cats and small dogs up to 20 lbs";
      case "MEDIUM":
        return "Perfect for dogs 20-40 lbs";
      case "LARGE":
        return "Suitable for dogs 40-70 lbs";
      case "EXTRA_LARGE":
        return "Designed for dogs over 70 lbs";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
              Kennels
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage and view all kennel units
            </p>
          </div>
          {session?.user.role === "ADMIN" && (
            <Button onClick={() => router.push("/kennels/new")}>
              <Plus className="mr-2 h-4 w-4" />
              Add Kennel
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All sizes</SelectItem>
              <SelectItem value="SMALL">Small</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="LARGE">Large</SelectItem>
              <SelectItem value="EXTRA_LARGE">Extra Large</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All statuses</SelectItem>
              <SelectItem value="AVAILABLE">Available</SelectItem>
              <SelectItem value="OCCUPIED">Occupied</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
              <SelectItem value="RESERVED">Reserved</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !dateRange.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={{
                  from: dateRange.from,
                  to: dateRange.to,
                }}
                onSelect={(range) => {
                  setDateRange({
                    from: range?.from,
                    to: range?.to,
                  });
                }}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Kennel Grid */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kennels?.map((kennel) => (
              <Card
                key={kennel.id}
                className="cursor-pointer transition-all hover:shadow-lg"
                onClick={() => router.push(`/kennels/${kennel.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{kennel.name}</CardTitle>
                      <CardDescription>{getSizeDescription(kennel.size)}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(kennel.status)}>
                      {kennel.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Size:</span>{" "}
                      <span>{kennel.size}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Daily Rate:
                      </span>{" "}
                      <span>${kennel.dailyRate}</span>
                    </div>
                    {kennel.features && kennel.features.length > 0 && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Features:
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {kennel.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  {kennel.reservations.length > 0 && (
                    <p className="text-sm text-gray-500">
                      Next reservation:{" "}
                      {format(
                        new Date(kennel.reservations[0]?.startDate),
                        "MMM d, yyyy"
                      )}
                    </p>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default KennelListPage;
