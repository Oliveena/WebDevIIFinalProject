import CategoryRow from "./CategoryRow.jsx";
import { useTheme } from "@mui/material/styles";

const BudgetForm = ({
  totalIncome,
  categories,
  onIncomeChange,
  onCategoryChange,
  getIconComponent,
}) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {/* Income Input */}
      <div
        style={{
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[50] // gray-50 equivalent
              : theme.palette.background.default,
          borderRadius: 24, // roughly rounded-xl
          padding: theme.spacing(3),
          marginBottom: theme.spacing(5),
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: theme.spacing(1) }}>
          <label
            style={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: theme.palette.text.primary,
            }}
            htmlFor="total-income"
          >
            Total Monthly Income
          </label>
        </div>
        <div
          style={{
            position: "relative",
            borderRadius: 12,
            boxShadow:
              theme.palette.mode === "light"
                ? "0 1px 2px rgb(0 0 0 / 0.05)"
                : "0 1px 2px rgb(255 255 255 / 0.05)",
            maxWidth: 320,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: theme.palette.text.secondary,
              fontSize: "0.875rem",
            }}
          >
            $
          </div>
          <input
            id="total-income"
            type="number"
            placeholder="0.00"
            value={totalIncome || ""}
            onChange={onIncomeChange}
            style={{
              width: "100%",
              padding: "16px 48px",
              borderRadius: 12,
              border: `1px solid ${
                theme.palette.mode === "light"
                  ? theme.palette.grey[300]
                  : theme.palette.grey[700]
              }`,
              fontSize: "1.125rem",
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper,
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = theme.palette.primary.main)
            }
            onBlur={(e) =>
              (e.target.style.borderColor =
                theme.palette.mode === "light"
                  ? theme.palette.grey[300]
                  : theme.palette.grey[700])
            }
            getIconComponent={getIconComponent}
          />
        </div>
      </div>

      {/* Category Table */}
      <div
        style={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 24,
          border: `1px solid ${
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
          }`,
          overflow: "hidden",
          marginBottom: theme.spacing(5),
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead
              style={{
                backgroundColor:
                  theme.palette.mode === "light"
                    ? theme.palette.grey[50]
                    : theme.palette.background.default,
              }}
            >
              <tr>
                {["Category", "Amount ($)", "% of Income"].map((text) => (
                  <th
                    key={text}
                    style={{
                      padding: theme.spacing(2, 3),
                      textAlign: "left",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: theme.palette.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderBottom: `1px solid ${
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700]
                      }`,
                    }}
                  >
                    {text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody
              style={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              {categories.map((cat) => (
                <CategoryRow
                  key={cat.id}
                  category={cat}
                  onChange={onCategoryChange}
                  getIconComponent={getIconComponent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
