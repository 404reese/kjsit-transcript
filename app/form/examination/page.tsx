"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const formSchema = z.object({
  semVVIIExamDate: z.date({
    required_error: "Exam date is required",
  }),
  semVVIICGPI: z.string().regex(/^\d{1,2}(\.\d{2})?$/, {
    message: "Enter a valid CGPI/Percentage with up to 2 decimal places",
  }),
  semVIVIIIExamDate: z.date({
    required_error: "Exam date is required",
  }),
  semVIVIIICGPI: z.string().regex(/^\d{1,2}(\.\d{2})?$/, {
    message: "Enter a valid CGPI/Percentage with up to 2 decimal places",
  }),
  finalAggregate: z.string().regex(/^\d{1,2}(\.\d{2})?$/, {
    message: "Enter a valid percentage with up to 2 decimal places",
  }),
  result: z.string({
    required_error: "Please select your result",
  }),
  marksheetFormat: z.string({
    required_error: "Please select marksheet format",
  }),
  excelMarksheet: z.any()
    .refine((file) => file?.length === 1, "Excel marksheet is required")
    .refine(
      (file) => {
        if (file?.[0]) {
          return ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(file[0].type);
        }
        return false;
      },
      "Only Excel files are allowed"
    ),
  scannedMarksheet: z.any()
    .refine((file) => file?.length === 1, "Scanned marksheet is required")
    .refine(
      (file) => {
        if (file?.[0]) {
          return ["application/pdf", "image/jpeg", "image/png"].includes(file[0].type);
        }
        return false;
      },
      "Only PDF, JPEG, or PNG files are allowed"
    ),
  paymentReceipt: z.any()
    .refine((file) => file?.length === 1, "Payment receipt is required")
    .refine(
      (file) => {
        if (file?.[0]) {
          return ["application/pdf", "image/jpeg", "image/png"].includes(file[0].type);
        }
        return false;
      },
      "Only PDF, JPEG, or PNG files are allowed"
    ),
});

export default function ExaminationDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Examination Details</CardTitle>
          <CardDescription>
            Please provide your examination details and upload required documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Examination Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Examination Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="semVVIIExamDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="flex items-center gap-2">
                          Sem V/VII Exam Date
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>For FE-TE, enter SEM V date.<br />For FE-BE, enter SEM VII date.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date()
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="semVVIICGPI"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sem V/VII CGPI</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Upto 2 Decimal Places (Eg: 8.12 / 72.08)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="semVIVIIIExamDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="flex items-center gap-2">
                          Sem VI/VIII Exam Date
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>For FE-TE, enter SEM VI date.<br />For FE-BE, enter SEM VIII date.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date()
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="semVIVIIICGPI"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sem VI/VIII CGPI</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Upto 2 Decimal Places (Eg: 8.12 / 72.08)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="finalAggregate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          Final Aggregate Percentage
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>For Revised syllabus 2001 and R2007: Fill aggregate percentage of the last 2 semesters only.<br />
                                For Revised syllabus 2012 onwards: Fill aggregate percentage from FE-BE (All Semesters).</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Upto 2 Decimal Places (Eg: 75.25)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="result"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Result</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your result" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="firstClass">First Class with Distinction</SelectItem>
                            <SelectItem value="firstClassHonors">First Class</SelectItem>
                            <SelectItem value="secondClass">Second Class</SelectItem>
                            <SelectItem value="pass">Pass Class</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Documents Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Documents Upload</h3>
                <div className="grid grid-cols-1 gap-6">
                  <FormField
                    control={form.control}
                    name="marksheetFormat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EXCEL Format Selection</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select marksheet format" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="format1">Format 1 (2012-2016)</SelectItem>
                            <SelectItem value="format2">Format 2 (2016-2020)</SelectItem>
                            <SelectItem value="format3">Format 3 (2020-Present)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excelMarksheet"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload Marksheet (EXCEL format)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".xls,.xlsx"
                            onChange={(e) => onChange(e.target.files)}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Upload your marksheet in Excel format (.xls or .xlsx)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="scannedMarksheet"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload Marksheet (Scanned Copy)</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => onChange(e.target.files)}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Upload scanned copy of your marksheet (PDF, JPG, or PNG)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paymentReceipt"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload Payment Receipt</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => onChange(e.target.files)}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Upload your payment receipt (PDF, JPG, or PNG)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline">
                  Previous
                </Button>
                <Button type="submit">Submit Application</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}