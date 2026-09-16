import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DISCRIMINATION_TABLES } from '@/data/content'

export default function Discriminate() {
  const [openId, setOpenId] = useState<string | null>(DISCRIMINATION_TABLES[0]?.id ?? null)

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Discriminate</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The exam is mostly about telling confusable Azure services apart. Pick a pair below.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {DISCRIMINATION_TABLES.map((d) => (
          <Button key={d.id} size="sm" variant={openId === d.id ? 'default' : 'outline'} onClick={() => setOpenId(d.id)}>
            {d.techA} vs. {d.techB}
          </Button>
        ))}
      </div>

      {DISCRIMINATION_TABLES.filter((d) => d.id === openId).map((table) => (
        <Card key={table.id}>
          <CardHeader>
            <CardTitle className="text-lg">
              {table.techA} <span className="text-muted-foreground">vs.</span> {table.techB}
            </CardTitle>
            <CardDescription>Read a row, cover the right two columns, and say which is which before checking.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/60 text-left text-muted-foreground">
                  <th className="py-2 pr-3 font-medium">Question</th>
                  <th className="py-2 pr-3 font-medium">{table.techA}</th>
                  <th className="py-2 font-medium">{table.techB}</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 align-top last:border-0">
                    <td className="py-2.5 pr-3 font-medium">{row.question}</td>
                    <td className="py-2.5 pr-3 text-muted-foreground">{row.a}</td>
                    <td className="py-2.5 text-muted-foreground">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
