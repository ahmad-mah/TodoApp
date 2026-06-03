import GradientCard from '@/shared/components/GradientCard';
import useTheme from '@/theme/useTheme';
import StatCard from './StatCard';
import useTodoStats from '@/features/home/hooks/useTodoStats';

const SettingsStats = () => {
  const { colors } = useTheme();

  const { completed, total, active } = useTodoStats();

  return (
    <GradientCard title="Progress Stats">
      <StatCard iconName="list" color={colors.primary} title={`${total}`} subtitle="Total Todos" />
      <StatCard
        iconName="checkmark-circle"
        color={colors.success}
        title={`${completed}`}
        subtitle="Completed"
      />
      <StatCard iconName="time" color={colors.warning} title={`${active}`} subtitle="Active" />
    </GradientCard>
  );
};

export default SettingsStats;
