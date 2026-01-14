import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { 
  PhoneCall, 
  PhoneForwarded, 
  PhoneIncoming, 
  AlertCircle, 
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { motion } from "motion/react";

const callData = [
  { name: "Mon", outbound: 120, inbound: 80 },
  { name: "Tue", outbound: 150, inbound: 100 },
  { name: "Wed", outbound: 200, inbound: 120 },
  { name: "Thu", outbound: 180, inbound: 90 },
  { name: "Fri", outbound: 250, inbound: 140 },
  { name: "Sat", outbound: 90, inbound: 40 },
  { name: "Sun", outbound: 70, inbound: 30 },
];

const revenueData = [
  { name: "Mon", revenue: 1200 },
  { name: "Tue", revenue: 1500 },
  { name: "Wed", revenue: 2200 },
  { name: "Thu", revenue: 1800 },
  { name: "Fri", revenue: 2800 },
  { name: "Sat", revenue: 1100 },
  { name: "Sun", revenue: 900 },
];

const statusData = [
  { name: "Successful", value: 850, color: "#10b981" },
  { name: "Errors/Failed", value: 150, color: "#ef4444" },
];

const StatCard = ({ title, value, icon: Icon, description, trend, trendValue }: any) => (
  <Card className="overflow-hidden border-border/50">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">
        {trend === "up" ? (
          <span className="text-emerald-500 inline-flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            {trendValue}
          </span>
        ) : (
          <span className="text-rose-500 inline-flex items-center">
            <ArrowDownRight className="h-3 w-3 mr-1" />
            {trendValue}
          </span>
        )}
        {" "}from last week
      </p>
    </CardContent>
  </Card>
);

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Calls"
          value="1,284"
          icon={PhoneCall}
          trend="up"
          trendValue="+12.5%"
        />
        <StatCard
          title="Outbound"
          value="842"
          icon={PhoneForwarded}
          trend="up"
          trendValue="+18.2%"
        />
        <StatCard
          title="Inbound"
          value="442"
          icon={PhoneIncoming}
          trend="down"
          trendValue="-4.3%"
        />
        <StatCard
          title="Revenue Generated"
          value="$12,450"
          icon={DollarSign}
          trend="up"
          trendValue="+24.1%"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-border/50">
          <CardHeader>
            <CardTitle>Call Volume</CardTitle>
            <CardDescription>
              Outbound vs Inbound calls handled by the AI agent this week.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={callData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--background)", 
                      borderColor: "var(--border)",
                      borderRadius: "8px"
                    }}
                    itemStyle={{ color: "var(--foreground)" }}
                  />
                  <Legend />
                  <Bar dataKey="outbound" fill="var(--chart-1)" radius={[4, 4, 0, 0]} name="Outbound" />
                  <Bar dataKey="inbound" fill="var(--chart-2)" radius={[4, 4, 0, 0]} name="Inbound" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-border/50">
          <CardHeader>
            <CardTitle>Call Status</CardTitle>
            <CardDescription>
              Success vs Error rate of AI interactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--background)", 
                      borderColor: "var(--border)",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  Successful Completion
                </span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mr-2" />
                  Handled Errors
                </span>
                <span className="font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-border/50">
          <CardHeader>
            <CardTitle>Revenue Generation</CardTitle>
            <CardDescription>
              Revenue generated through automated outbound bookings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "var(--background)", 
                      borderColor: "var(--border)",
                      borderRadius: "8px"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--chart-1)" 
                    strokeWidth={2} 
                    dot={{ fill: "var(--chart-1)" }} 
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-border/50">
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
            <CardDescription>
              General statistics and cool factor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg. Call Duration</span>
                  <span className="font-medium">4m 32s</span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[70%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="font-medium">12.4%</span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[45%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Customer Satisfaction</span>
                  <span className="font-medium">4.8/5.0</span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%]" />
                </div>
              </div>
              
              <div className="pt-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold">+42%</div>
                  <div className="text-xs text-muted-foreground">Efficiency Boost</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
