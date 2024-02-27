import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
  return (
    <div className="flex max-h-screen flex-col items-center justify-between p-24 min-w-max">
      <div className="border rounded">
        <h1>CRUD com tauri</h1>
        <Table>
          <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Actions</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                1
              </TableCell>
              <TableCell>
                Bernardo
              </TableCell>
              <TableCell>
                18
              </TableCell>
              <TableCell>
              <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
