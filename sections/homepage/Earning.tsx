import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';

import StakeNEarnIcon from 'assets/svg/earn/stake-n-earn.svg';
import VoteNGovernIcon from 'assets/svg/earn/vote-n-govern.svg';
import {
	FlexDivCentered,
	FlexDivCol,
	FlexDivColCentered,
	FlexDivRow,
} from 'components/layout/flex';
import { GridDiv } from 'components/layout/grid';
import { StackSection } from 'sections/homepage/section';
import { Copy, Title } from 'sections/homepage/text';
import { SmallGoldenHeader, WhiteHeader } from 'styles/common';
import media, { Media } from 'styles/media';

const EARNINGS = [
	{
		id: 'Project Funding',
		title: 'Project Funding',
		copy: 'Funds PG & Community projects based on the councilors votes',
		image: <VoteNGovernIcon />,
	},
	{
		id: 'BuiDL',
		title: 'BuiDL',
		copy: 'Designing and managing the creation of internal projects implemented by the community',
		image: <StakeNEarnIcon />,
	},

];

const Earning = () => {
	const { t } = useTranslation();

	const title = (
		<>
			<SmallGoldenHeader>{t('Community Driven')}</SmallGoldenHeader>
			<WhiteHeader>
				<Trans i18nKey={'By the Community for the community'} components={[<Emphasis />]} />
			</WhiteHeader>
			<GrayCopy>{t('The Grants Council is an independent body, a value-based Kwenta elected body whose ultimate goal is to fund beneficial and high-quality public goods projects through grants, initiative bounties, or competition prizes.')}</GrayCopy>
			
		
		</>
	);

	return (
		<StackSection>
			<Container>
				<FlexDivColCentered>{title}</FlexDivColCentered>
				<Media greaterThan="sm">
					<StyledFlexContainer>
						{EARNINGS.map(({ id, title, copy, image }) => (
							<FeatureCard key={id}>
								<FeatureIconContainer>{image}</FeatureIconContainer>
								<FeatureContentTitle>
									<CenteredTitle>{t(title)}</CenteredTitle>
								</FeatureContentTitle>
								<CenteredCopy>{t(copy)}</CenteredCopy>
							</FeatureCard>
						))}
					</StyledFlexContainer>
				</Media>
				<Media lessThan="sm">
					<StyledFlexDivColCentered>
						{EARNINGS.map(({ id, title, copy, image }) => (
							<FeatureCard key={id}>
								<FeatureIconContainer>{image}</FeatureIconContainer>
								<FeatureContentTitle>
									<CenteredTitle>{t(title)}</CenteredTitle>
								</FeatureContentTitle>
								<CenteredCopy>{t(copy)}</CenteredCopy>
							</FeatureCard>
						))}
					</StyledFlexDivColCentered>
				</Media>
			</Container>
		</StackSection>
	);
};

const StyledFlexDivColCentered = styled(FlexDivColCentered)`
	width: 405px;
	margin: auto;
	padding: 0px;

	${media.lessThan('sm')`
		gap: 20px;
	`}
`;

const GrayCopy = styled(Copy)`
	margin-top: 17px;
	text-align: center;
	width: 800px;
	font-size: 18px;
	line-height: 100%;
	color: ${(props) => props.theme.colors.common.secondaryGray};
	${media.lessThan('sm')`
		font-size: 16px;
		width: 336px;
		margin-bottom: 60px;
	`}
`;

const Emphasis = styled.b`
	color: ${(props) => props.theme.colors.common.primaryYellow};
`;

const CenteredCopy = styled(Copy)`
	font-size: 15px;
	text-align: center;
	width: 300px;
	line-height: 100%;
	letter-spacing: -0.03em;
	color: ${(props) => props.theme.colors.common.secondaryGray};
`;

const CenteredTitle = styled(Title)`
	font-family: ${(props) => props.theme.fonts.black};
	font-variant: all-small-caps;
	text-transform: uppercase;
	font-size: 24px;
`;

const Container = styled(GridDiv)`
	width: 100vw;
	overflow: hidden;
	justify-content: center;
	padding: 110px 0px;
`;

const StyledFlexContainer = styled(FlexDivRow)`
	width: 1160px;
	justify-content: center;
	gap: 20px;
	margin-top: 40px;
`;

const FeatureCard = styled(FlexDivCol)`
	padding: 25px;
	background-color: #1a1a1a;
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.05);
`;

const FeatureIconContainer = styled.div`
	padding-bottom: 15px;
	svg {
		width: 64px;
		height: 64px;
	}
	display: flex;
	justify-content: center;
`;

const FeatureContentTitle = styled(FlexDivCentered)`
	padding-bottom: 5px;
	justify-content: center;
`;

export default Earning;
