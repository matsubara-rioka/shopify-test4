import React, { useState } from 'react';
import { Page, Card, Layout, Button, Stack, TextStyle, Modal } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';

export function ResourceSelector() {
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelection = (resources) => {
    setOpen(false);

    if (resources.selection.length > 0) {
      const newSelectedProducts = resources.selection.map((product) => ({
        id: product.id,
        title: product.title,
        image: product.images[0]?.originalSrc || null,
        price: product.variants[0]?.price || null,
      }));

      setSelectedProducts([...selectedProducts, ...newSelectedProducts]);
    }
  };

  const removeProduct = (productId) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  return (
    <Page
      title="Product selector"
      primaryAction={{
        content: 'Select Products',
        onAction: () => setOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={open}
        onSelection={handleSelection}
        onCancel={() => setOpen(false)}
      />

      <Layout>
        {selectedProducts.map((product) => (
          <Layout.Section key={product.id} secondary>
            <Card>
              <div style={{ padding: '15px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <img src={product.image} alt={product.title} style={{ maxWidth: '100%' }} />
                </div>
                <div>
                  <h3>{product.title}</h3>
                  <TextStyle variation="subdued">${product.price}</TextStyle>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <Button onClick={() => removeProduct(product.id)} destructive>
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          </Layout.Section>
        ))}
      </Layout>

      {selectedProducts.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button onClick={clearSelection}>Clear Selection</Button>
        </div>
      )}
    </Page>
  );
}
