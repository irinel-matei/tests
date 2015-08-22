module TheBookOfFSharp.RpnCalculator
open System

let evalRpnExpr (s : string) =
 let solve items current =
  match (current, items) with
  | "+", y::x::t -> (x + y)::t
  | "-", y::x::t -> (x - y)::t
  | "*", y::x::t -> (x * y)::t
  | "/", y::x::t -> (x / y)::t
  | _ -> (float current)::items
 (s.Split(' ') |> Seq.fold solve []).Head

[<EntryPoint>]
let main argv =
 [ "4 2 5 * + 1 3 2 * + /"
   "5 4 6 + /"
   "10 4 3 + 2 * -"
   "2 3 +"
   "90 34 12 33 55 66 + * - + -"
   "90 3 1 - -" ]
 |> List.map (fun expr -> expr, evalRpnExpr expr)
 |> List.iter (fun (expr, result) -> printfn "(%s) = %A" expr result)



 let marchHighTemps = [ 33.0; 30.0; 33.0; 38.0; 36.0; 31.0; 35.0;
     42.0; 53.0; 65.0; 59.0; 42.0; 31.0; 41.0;
     49.0; 45.0; 37.0; 42.0; 40.0; 32.0; 33.0;
     42.0; 48.0; 36.0; 34.0; 38.0; 41.0; 46.0;
     54.0; 57.0; 59.0 ]

 let totalMarchHighTemps = List.sum marchHighTemps
 
 let average = totalMarchHighTemps / float marchHighTemps.Length

 printfn "%A" average

 for i in  [0..10] |> List.map (fun expr -> expr + 2)  do 
   printfn "%A" i

//recursion
 let rec factorial v =
  match v with | 1L -> 1L
               |  _ -> v * factorial (v - 1L)

 printfn "%A" (factorial 5L)



 let slope p1 p2 =
  let x1 = fst p1
  let y1 = snd p1
  let x2 = fst p2
  let y2 = snd p2
  (y1 - y2) / (x1 - x2)
 
 printfn "%A" (slope (13.0, 8.0) (1.0, 2.0))



 //loop
 let echoUserInput (getInput : unit -> string) =
  let mutable input = getInput()
  while not (input.ToUpper().Equals("QUIT")) do
   printfn "You entered: %s" input
   input <- getInput()
 
 //echoUserInput (fun () -> printfn "Type something and press enter" 
 //                         System.Console.ReadLine())




 //sequences
// let lines = seq { use r = new System.IO.StreamReader("C://IFRToolLog.txt")
//                   while not r.EndOfStream do yield r.ReadLine() }

 //lines |> printfn "%A";

 let range = seq { 1 .. 10 }

 //range |> Seq.map (fun expr -> expr * expr ) |> printfn "%A";

 let rand = System.Random();

 Seq.init 10 (fun _ -> rand.Next 100) |> Seq.sort  |> printfn "%A";

 
 Seq.init 10 (fun _ -> rand.Next 100) |>  Seq.map (fun x -> x,x * 2 )   |> Seq.sortBy snd  |> printfn "%A";

 List.nth [ 'A'..'Z' ] 3 |> printfn "%c";

 //pattern matching
//[ 10; 6; 4; 5;  0; 7 ]  |> List.filter (function | 10 -> true
//                                                  | _ -> false)  |> printfn "%A";
//
//;;


  // Declaration of the factorial function
let rec factorialEx num =
    match num with
    | n when n <= 1 -> 1            // First case branch
    | n -> n * (factorialEx (n - 1))  // Second case branch
 ;;
 // Testing the factorial
 //printfn "%A" (factorialEx 5)

;;



 0