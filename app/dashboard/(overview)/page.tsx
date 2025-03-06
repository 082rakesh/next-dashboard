import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
	fetchRevenue,
	fetchLatestInvoices,
	fetchCardData,
} from '@/app/lib/data';
import { Suspense } from 'react';
import {
	CardSkeleton,
	InvoiceSkeleton,
	RevenueChartSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
	// const revenue = await fetchRevenue();
	// const latestInvoices = await fetchLatestInvoices();
	// const cardData = await fetchCardData();

	// NOTE: This code can be uncommented when use Parallel request using Promise.allSettled

	// const [revenue, latestInvoices, cardData] = await Promise.all([
	// 	fetchRevenue(),
	// 	fetchLatestInvoices(),
	// 	fetchCardData(),
	// ]);
	// const {
	// 	numberOfCustomers,
	// 	numberOfInvoices,
	// 	totalPaidInvoices,
	// 	totalPendingInvoices,
	// } = cardData;

	// ############ Promise.all END here ############

	// NOTE: This code can be uncommented when use Parallel request using Promise.allSettled

	// const results = await Promise.allSettled([
	// 	fetchRevenue(),
	// 	fetchLatestInvoices(),
	// 	fetchCardData(),
	// ]);

	// const defaultCardData = {
	// 	numberOfCustomers: '0',
	// 	numberOfInvoices: '0',
	// 	totalPaidInvoices: '0',
	// 	totalPendingInvoices: '0',
	// };
	// const revenue = results[0].status === 'fulfilled' ? results[0].value : [];
	// const latestInvoices =
	// 	results[1].status === 'fulfilled' ? results[1].value : [];
	// const cardData =
	// 	results[2].status === 'fulfilled' ? results[2].value : defaultCardData;

	// ############ Promise.allSettled END here ############

	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				<Suspense fallback={<CardSkeleton />}>
					<CardWrapper />
				</Suspense>
			</div>
			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<Suspense fallback={<RevenueChartSkeleton />}>
					<RevenueChart />
				</Suspense>
				<Suspense fallback={<InvoiceSkeleton />}>
					<LatestInvoices />
				</Suspense>
			</div>
		</main>
	);
}
