'use client';
import { GetMatchScore } from '@/actions/riotApiActions/getMatchScore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useServerAction from '@/utils/customHook/useServerAction';
import { CardFooter } from '@material-tailwind/react';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MatchScoreCard() {
  const [winner, setWinner] = React.useState('');
  const [score, setScore] = React.useState('');
  const { callableName: server_getMatchScore, isPending: isGettingMatchScore } =
    useServerAction({
      action: ({
        redTeamId,
        blueTeamId,
      }: {
        redTeamId: string;
        blueTeamId: string;
      }) =>
        GetMatchScore({
          redTeamId,
          blueTeamId,
        }),
      onSuccess: (result: any) => {
        console.log(result);
        setWinner(result.winner);
        setScore(result.score);
      },
      onError: () => {
        console.error('Error');
      },
    });

  const form = useForm({
    defaultValues: {
      redTeamId: '',
      blueTeamId: '',
    },
    mode: 'onChange',
  });

  React.useEffect(() => {
    form.setError('root', {});
  }, [form.watch('redTeamId'), form.watch('blueTeamId')]);

  return (
    <Card className="w-[350px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) =>
            server_getMatchScore({
              redTeamId: values.redTeamId,
              blueTeamId: values.blueTeamId,
            })
          )}
          className="space-y-4"
        >
          <CardHeader>
            <CardTitle>Match Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="redTeamId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label="Red Team Id"
                      id="redTeamId"
                      placeholder=""
                      type="text"
                      disabled={isGettingMatchScore}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blueTeamId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      label="Blue Team Id"
                      id="blueTeamId"
                      type="text"
                      disabled={isGettingMatchScore}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col">
              <p>Winner: {winner}</p>
              <p>Score: {score}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" size="default">
              Retrieve
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
